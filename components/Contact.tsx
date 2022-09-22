import React from "react";
import Divider, { Alignment } from "./Divider";

const Contact = () => {
  return (
    <div className="h-8 relative">
      <Divider heading="Contact" alignment={Alignment.LEFT} />
    </div>
  );
};

export default Contact;
