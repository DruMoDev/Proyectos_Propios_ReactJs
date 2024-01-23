import { Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "../components/Sidebar";
import { QuioscoProvider } from "../context/QuioscoProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pasos from "../components/Pasos";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} id="__next">
        <QuioscoProvider>
          <div className="flex">
            <aside className="w-4/12 xl:w-1/4 2xl:w-1/5">
              <Sidebar />
            </aside>

            <main className="w-8/12 xl:w-3/4 2xl:w-4/5 h-screen">
              <div className="px-10">
                <Pasos />
                {children}
              </div>
            </main>
          </div>

          <ToastContainer
            autoClose="2000"
            closeOnClick
            pauseOnHover={false}
            pauseOnFocusLoss={false}
          />
        </QuioscoProvider>
      </body>
    </html>
  );
}
