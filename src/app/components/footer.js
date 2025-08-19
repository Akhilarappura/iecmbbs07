import React from 'react'
import { GraduationCap } from "lucide-react"
import Link from "next/link"
const Footer = () => {
  return (
    
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">IEC MBBS</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for international education. Helping MMS students achieve their global dreams.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#countries" className="hover:text-white">
                    Countries
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Study Destinations</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Study in USA
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Study in UK
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Study in Canada
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Study in Australia
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Study in Germany
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+91 98765 43210</li>
                <li>info@iecmbbs.com</li>
                {/* <li>Mumbai, Delhi, Bangalore, Pune</li> */}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 IEC MBBS. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer