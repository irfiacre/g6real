import React from "react";
import NavigationSection from "@/src/views/common/Navigation";
import Footer from "@/src/views/common/Footer";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavigationSection />
      {children}
      <Footer />
    </main>
  );
}
