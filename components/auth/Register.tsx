"use client";

import { usePopupStore } from "@/lib/dialogStore";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { VscClose } from "react-icons/vsc";

export default function Register() {
  const register = usePopupStore((state) => state.register);
  const toggleRegister = usePopupStore((state) => state.toggleRegister);
  const toggleLogin = usePopupStore((state) => state.toggleLogin);

  const togglePopup = () => {
    toggleLogin();
    toggleRegister();
  };

  return (
    <Dialog open={register} onClose={toggleRegister} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <span className="auth-close-icon" onClick={toggleRegister}>
              <VscClose size={26} />
            </span>
            <div className="p-7 grid gap-6">
              <h5 className="text-2xl text-gray-800 font-semibold">Sign Up</h5>
              <form className="form-log">
                <div className="form-content flex flex-col gap-3 mb-6">
                  <fieldset>
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" type="text" />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="email">Email Address</label>
                    <input name="email" id="email" type="email" />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="phone">Phone</label>
                    <input name="phone" id="phone" type="number" />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="password">Password</label>
                    <input name="password" id="password" type="password" />
                  </fieldset>
                </div>
                <button type="submit" className="xz-auth-btn text-white mb-4">
                  Sign Up
                </button>
                <p className="text-gray-700 text-center">
                  Already have an account?{" "}
                  <span
                    className="primary-color cursor-pointer"
                    onClick={togglePopup}
                  >
                    Sign In
                  </span>
                </p>
              </form>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
