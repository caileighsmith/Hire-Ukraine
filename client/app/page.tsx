import ciscoLogo from '../public/cisco-logo.png'

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">




    <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
            <a href="#" className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
                <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">New</span> <span className="text-sm font-medium">Slava Ukraine!</span> 
                <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
            </a>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We help Ukranians <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">find jobs</span></h1>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 mb-8">Here at Hire-Ukraine, we connect Ukranians with supporitng businesses for hiring, freelancing and work-oppertunities.</p>

            <form className="w-full max-w-md mx-auto">   
                <label htmlFor="default-email" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email sign-up</label>
                <div className="relative">
                          
                    <div className="button-container mt-5">
                      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">I'm looking for work</button>
                      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">For employers</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
        <div id="fullWidthTabContent" className=" border-gray-200 dark:border-gray-600">
          <div className=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Developers</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Public repositories</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Open source projects</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Contributors</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">90+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Top Forbes companies</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">4M+</dt>
                    <dd className="text-gray-500 dark:text-gray-400">Organizations</dd>
                </div>
            </dl>
          </div>
        </div>
    </section>




      {/* <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Get back to growth with <span className="text-blue-600 dark:text-blue-500">the world's #1</span> CRM.</h1> */}
      {/* <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We help Ukranians <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">find jobs</span></h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Hire-Ukraine, we connect Ukranians with supporitng businesses for hiring, freelancing and work-oppertunities.</p> */}

      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      
        {/* Content   */}
      </main>



    </div>
  );
}
