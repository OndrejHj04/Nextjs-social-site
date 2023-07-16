import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../app/redux/features/topBar/topBarSlice";
import { IoMdClose } from "react-icons/io";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="bg-white py-5 pl-5 pr-10 rounded-xl relative">
              <div
                className="absolute top-0 right-0 cursor-pointer"
                onClick={() => dispatch(closeModal())}
              >
                <IoMdClose size={36} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
