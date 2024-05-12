
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"

export function Landing() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header
        className="bg-gray-100 px-4 lg:px-6 h-14 flex items-center shadow-sm dark:bg-gray-800">
        <Link className="flex items-center justify-center" href="#">
          <BriefcaseMedicalIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
          <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-gray-50">Gateway Diagnostics</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-900 dark:text-gray-50"
            href="#about-us">
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-900 dark:text-gray-50"
            href="#">
            Services
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-900 dark:text-gray-50"
            href="#">
            Book Appointment
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div
              className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="space-y-4">
                <div
                  className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-50">
                  Comprehensive Diagnostics
                </div>
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-gray-50">
                  Empowering Your Health
                </h1>
                <p
                  className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Gateway Diagnostics, your trusted partner for comprehensive medical diagnostics. Cutting-edge technology,
                  expert care, and personalized attention - all under one roof.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#">
                    Book Appointment
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                    href="#">
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                alt="Gateway Diagnostics"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550" />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div
              className="grid items-center gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
              <img
                alt="Our Team"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg"
                width="550" />
              <div className="space-y-4">
                <div
                  className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                  About Us
                </div>
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-50">
                  Dedicated to Your Health
                </h2>
                <p
                  className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  At Gateway Diagnostics, we are a team of highly skilled medical professionals committed to providing
                  exceptional diagnostic services. With state-of-the-art equipment and a patient-centric approach, we
                  strive to empower our clients with the knowledge and tools they need to make informed decisions about
                  their health.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#">
                    Meet the Team
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                    href="#">
                    Our Approach
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <div
                className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-50">
                Our Services
              </div>
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-50">
                Comprehensive Diagnostic Solutions
              </h2>
              <p
                className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Gateway Diagnostics offers a wide range of diagnostic services to meet all your healthcare needs. From routine
                check-ups to advanced imaging, we have you covered.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                  <MicroscopeIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Laboratory Tests</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Our state-of-the-art laboratory offers a wide range of diagnostic tests, from routine blood work to
                    specialized panels.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                  <XIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Imaging Services</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    From advanced imaging like MRI and CT scans to routine X-rays, we provide comprehensive diagnostic
                    imaging services.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                  <HeartPulseIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Cardiac Diagnostics</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Our cardiac specialists offer a range of tests, including ECGs, stress tests, and echocardiograms,
                    to assess heart health.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <div
                className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50">
                Our Facilities
              </div>
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-50">
                State-of-the-Art Diagnostics
              </h2>
              <p
                className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Gateway Diagnostics is equipped with the latest medical technology and facilities to ensure accurate and
                efficient diagnostic services.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                  <BuildingIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Modern Facilities</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Our state-of-the-art facilities are designed with patient comfort and safety in mind, providing a
                    welcoming environment for your diagnostic needs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                  <MicroscopeIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Advanced Equipment</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Our diagnostic center is equipped with the latest medical technology, ensuring accurate and
                    efficient results for our patients.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                  <SmileIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Patient Comfort</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    We prioritize patient comfort throughout your diagnostic experience, ensuring a stress-free and
                    pleasant visit.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="about-us">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <div
                className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-50">
                Book an Appointment
              </div>
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-50">
                Schedule Your Diagnostic Appointment
              </h2>
              <p
                className="max-w-[700px] mx-auto text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our online booking system makes it easy to schedule your diagnostic appointment at a time that's
                convenient for you.
                <br /><br />
                Address: Suite 47, POWA plaza Zone C, Apo resettlement, Apo, Abuja, Nigeria.
                <br />
                Phone: &#128222; <a href="tel:+2349033554586">+234 903 355 4586</a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>)
  );
}

function BriefcaseMedicalIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 11v4" />
      <path d="M14 13h-4" />
      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M18 6v14" />
      <path d="M6 6v14" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>)
  );
}


function BuildingIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>)
  );
}


function HeartPulseIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>)
  );
}


function MicroscopeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>)
  );
}


function SmileIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
