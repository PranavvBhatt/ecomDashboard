import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 bg-opacity-80 text-gray-200 backdrop-blur-sm fixed bottom-0 left-0 w-full text-center py-3 z-20">
      <div>
        &copy; {new Date().getFullYear()} DesiMart. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
