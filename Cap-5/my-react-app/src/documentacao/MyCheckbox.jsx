import { useState } from "react";

function MyCheckbox() {
  const [liked, setLiked] = useState(true);

  function handleChange(e) {
    setLiked(e.target.checked);
  }

  return (
    <>
      <label>
        <input type="checkbox" checked={liked} onChange={handleChange} />
        Eu gostei disso
      </label>
      <p>Eu {liked ? "gostei" : "não gostei"} disso.</p>
    </>
  );
}

export default MyCheckbox;
