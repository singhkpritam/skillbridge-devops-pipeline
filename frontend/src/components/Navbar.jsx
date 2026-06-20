

import { Link } from "react-router-dom";

function Navbar() {
  return (
    // <div className="flex justify-between p-4 bg-black text-white font-bold text-xl">
    <div className="fixed top-0 left-0 w-full flex justify-between p-4 bg-black text-white font-bold text-xl z-50">
      <h1>SkillBridge</h1>

      <div className="flex gap-3">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Register</Link>
      </div>

    </div>
  );
}

export default Navbar;

// ****************3