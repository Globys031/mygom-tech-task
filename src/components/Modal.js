import Links from "./Links";
import { forwardRef } from "react";

const Modal = forwardRef(function MyModal(
  { title, description, closeModal, isOpen, showModal },
  ref
) {
  return (
    <div
      className={"relative z-10 " + (isOpen ? "" : "invisible")}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={
          "fixed inset-0 bg-gray-500 transition-opacity duration-300 " +
          (showModal ? "opacity-75" : "opacity-0")
        }
        aria-hidden="true"
      />

      <div
        className={
          "fixed inset-0 z-10 w-screen overflow-y-auto " +
          (showModal ? "opacity-100" : "opacity-0")
        }
      >
        <div className="flex h-screen items-center justify-center p-4 text-center sm:p-0">
          <div
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            ref={ref}
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    {title}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{description}</p>
                    <Links />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Modal;
