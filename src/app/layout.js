import { Geist, Geist_Mono } from "next/font/google";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css"; // ✅ Ant Design v5 推荐使用 reset.css
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UniMC 服务器联盟",
  description: "UniMC 服务器联盟",
};

export const viewport = {
  width: 'device-width',
  initialScale: 0.8,
  maximumScale: 0.8,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#274B93", // 🎨 设置按钮主色
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
