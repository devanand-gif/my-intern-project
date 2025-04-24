import "@/app/globals.css"; 
import Navbar from "@/src/components/Navbar"; 

// Metadata for the page, used by search engines and browsers
export const metadata = {
  title: "trvvrat", // Sets the title of the page
  description: "Explore the world with us", // Sets the meta description for the page
};

// Defines the RootLayout component, which wraps all pages in the application
// 'children' prop represents the page content that will be rendered inside this layout
export default function RootLayout({ children }) {
  return (
    // Sets the root HTML element with a language attribute
    <html lang="en">
      {/* Sets the body element where the main content resides */}
      <body>
        {/* Renders the Navbar component at the top of every page */}
        <Navbar />
        {/* Renders the actual page content passed as children */}
        {children}
      </body>
    </html>
  );
}