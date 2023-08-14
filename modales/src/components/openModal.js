import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

export function openModal() {
  const Modal = lazy(() => import("./modalSettings"));
  const modalDiv = document.createElement("div");
  modalDiv.id = "modal";
  document.body.appendChild(modalDiv);

  const root = createRoot(modalDiv);
  root.render(
    <Suspense fallback={<div>Loading..</div>}>
      <Modal root={root} title="Modal de config">
        Contenido de Modal
      </Modal>
    </Suspense>
  );
}

export function openModal2() {
  const Modal = lazy(() => import("./modalAccount"));
  const modalDiv = document.createElement("div");
  modalDiv.id = "modal";
  document.body.appendChild(modalDiv);

  const root = createRoot(modalDiv);
  root.render(
    <Suspense fallback={<div>Loading..</div>}>
      <Modal root={root} title="Modal de cuenta">
        Contenido de cuenta
      </Modal>
    </Suspense>
  );
}
