import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Jubril Oyebamiji. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
