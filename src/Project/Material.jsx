import React, { useState } from "react";

function Material() {
  const [modalOpen, setModalOpen] = useState(true);

  const handleCloseModal = () => setModalOpen(false);

  return (
    <div>
      {modalOpen ? (
        <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px", maxWidth: "400px", margin: "auto" }}>
          <h3>Modal Title</h3>
          <p>This is a simple modal content.</p>
          <button onClick={handleCloseModal} style={{ padding: "10px 20px", background: "blue", color: "white", border: "none", borderRadius: "4px" }}>
            Close
          </button>
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h3>The modal is now closed.</h3>
          <button onClick={() => setModalOpen(true)} style={{ padding: "10px 20px", background: "green", color: "white", border: "none", borderRadius: "4px" }}>
            Open Modal
          </button>
        </div>
      )}
    </div>
  );
}

export default Material;
