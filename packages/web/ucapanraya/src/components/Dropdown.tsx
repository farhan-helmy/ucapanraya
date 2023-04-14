import { Menu, Transition } from "@headlessui/react";
import { FC, Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

type DropdownProps = {
  generateUcapan: (nada: string) => void;
};

const Dropdown: FC<DropdownProps> = ({ generateUcapan }) => {
  const handleSubmitNada = (nada: string) => {
    generateUcapan(nada)
  };
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-indigo-400 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Generate ucapan
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute  mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleSubmitNada("happy")}
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                  >
                    {active ? (
                      <span role="img" aria-label="smile">
                        😁
                      </span>
                    ) : (
                      <span role="img" aria-label="smile">
                        😄
                      </span>
                    )}
                    Happy
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleSubmitNada("angry")}
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                  >
                    {active ? (
                      <span role="img" aria-label="angry">
                        😡
                      </span>
                    ) : (
                      <span role="img" aria-label="angry">
                        🤬
                      </span>
                    )}
                    Angry
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleSubmitNada("sad")}
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                  >
                    {active ? (
                      <span role="img" aria-label="sad">
                        😢
                      </span>
                    ) : (
                      <span role="img" aria-label="sad">
                        😢
                      </span>
                    )}
                    Sad
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleSubmitNada("boring")}
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                  >
                    {active ? (
                      <span role="img" aria-label="sad">
                        🥱
                      </span>
                    ) : (
                      <span role="img" aria-label="sad">
                        😴
                      </span>
                    )}
                    Boring
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleSubmitNada("santai")}
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}
                  >
                    {active ? (
                      <span role="img" aria-label="sad">
                        🤓
                      </span>
                    ) : (
                      <span role="img" aria-label="sad">
                        😎
                      </span>
                    )}
                    Santai
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Dropdown;