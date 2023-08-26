import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', current: true },
  { name: 'Products', current: false },
  { name: 'Quotes', current: false },
  { name: 'Resources', current: false },
  { name: 'About Us', current: false },
  { name: 'Contact', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MainNav() {
  return (
    <Disclosure as="nav" className=" bg-[#45A1D3CC]">
      {({ open }) => (
        <>
          <div className="mx-auto pb-1 xl:px-0 px-5 max-w-7xl ">
            <div className="relative flex h-10 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden lg:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}

                        className={classNames(
                          item.current ? ' text-white' : 'text-gray-300  hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className='flex gap-3 items-center justify-between'>
                <i style={{ color: 'white', fontSize: "25px" }} className="fa fa-facebook-official" aria-hidden="true"></i>
                <i style={{ color: 'white', fontSize: "25px" }} className="fa fa-twitter-square" aria-hidden="true"></i>
                <i style={{ color: 'white', fontSize: "25px" }} className="fa fa-linkedin-square" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"

                  className={classNames(
                    item.current ? ' text-white' : 'text-gray-300  hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className=" sm:hidden flex gap-3 items-center p-3 pt-0 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <img src="/images/navbarPhone.png" alt="navbar" />
              <div className='flex flex-col'>
                <span className='text-sm text-white'>Insurance Advisor</span>
                <span className='text-sm text-white'>+1 647 469 8766</span>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
