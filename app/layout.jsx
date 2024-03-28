import "@/assets/styles/globals.css";

export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find your dream rental property",
  keys: "rental, find rental, find properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default MainLayout;
