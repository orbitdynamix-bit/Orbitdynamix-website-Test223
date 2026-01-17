import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import { MapPin, Mail, Phone } from 'lucide-react';


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      <main className="pt-32 pb-40 lg:pb-48">
        <div className="container py-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-primary">Contact</span> Us
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Get in touch with our team for any inquiries.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center rounded-3xl translate-y-20 gap-y-6">
          <div className="w-10/12 mx-auto lg:w-[35%] lg:mx-0 bg-[#f5f5f5] p-6 md:p-10 text-[#1A1A1A] relative z-20 shadow-2xl rounded-3xl h-fit lg:self-center lg:-mr-16">
            <h2 className="text-3xl font-bold mb-4 text-black">Contact Information</h2>
            <p className="font-urbanist text-gray-600 mb-12">Fill up the form to get in touch with us</p>
            <div className="space-y-8">
              <div className="flex items-start gap-2">
                <MapPin className="w-6 h-6 text-[#1A1A1A] shrink-0 mt-1" />
                <p className="text-sm leading-relaxed font-urbanist text-gray-600">
                  F/5 Shahid Smrity Colony, Panchasayar, Kolkata -700094
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-6 h-6 text-[#1A1A1A] shrink-0" />
                <a
                  href="mailto:official@orbitdynamix.com"
                  className="text-sm font-urbanist text-gray-600 hover:text-primary transition-colors"
                >
                  official@orbitdynamix.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-6 h-6 text-[#1A1A1A] shrink-0" />
                <p className="text-sm font-urbanist text-gray-600">+91 6297369832 / 7908099602</p>
              </div>
            </div>
          </div>
          <div className="w-10/12 mx-auto lg:w-[65%] lg:mx-0 bg-[#DBDBDB] p-6 md:p-10 lg:pl-24 rounded-3xl relative z-10">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Send a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex w-full min-w-0 border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-gray-100 border-gray-300 text-[#1A1A1A] placeholder:font-urbanist placeholder:text-gray-500 h-12 rounded-lg"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex w-full min-w-0 border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-gray-100 border-gray-300 text-[#1A1A1A] placeholder:font-urbanist placeholder:text-gray-500 h-12 rounded-lg"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex w-full min-w-0 border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-gray-100 border-gray-300 text-[#1A1A1A] placeholder:font-urbanist placeholder:text-gray-500 h-12 rounded-lg"
              />
              <select className="flex w-fit items-center justify-between gap-2 border px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100 border-gray-300 text-[#1A1A1A] placeholder:font-urbanist data-[placeholder]:text-gray-500 h-12 rounded-lg">
                <option value="">Support</option>
                <option value="sales">Sales</option>
                <option value="support">Support</option>
                <option value="billing">Billing</option>
              </select>
              <textarea
                placeholder="Message"
                className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content w-full border px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-gray-100 border-gray-300 text-[#1A1A1A] placeholder:font-urbanist placeholder:text-gray-500 min-h-[120px] rounded-lg"
              />
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-all disabled:pointer-events-none disabled:opacity-50 shadow-xs py-2 bg-[#1A1A1A] font-urbanist text-white hover:bg-black px-12 h-12 rounded-full font-bold uppercase tracking-wider"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}