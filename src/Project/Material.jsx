import React, { useState } from "react";


function Material() {
  const [modalOpen, setModalOpen] = useState(true);

  const handleCloseModal = () => setModalOpen(false);

  return (
    <div>
      <UploadFileModal
        modalOpen={modalOpen}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
}

export default Material;
