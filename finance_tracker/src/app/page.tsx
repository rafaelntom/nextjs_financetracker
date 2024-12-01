export default function Home() {
  return (
    <div className="bg-background-light min-h-screen">
      <main className="flex flex-col md:flex-row min-h-screen font-roboto">
        {/* Left Side */}
        <section className="left-side w-full md:w-1/2 min-h-[50vh] md:min-h-screen bg-primary-dark flex items-center justify-center">
          <div className="text-baby-powder text-2xl md:text-3xl font-bold text-center p-6 md:p-0 uppercase tracking-wide">
            Your Financial Overview
          </div>
        </section>

        {/* Right Side */}
        <section className="right-side w-full md:w-1/2 min-h-[50vh] md:min-h-screen bg-sea-green flex items-center justify-center">
          <div className="flex flex-col items-center gap-6 p-8 md:p-10 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-dark">
              Welcome to the Finance Tracker
            </h1>

            <div className="flex flex-col gap-4 w-full md:w-auto">
              <a className="text-lg font-medium text-primary-dark border-2  border-primary-dark  transition-colors rounded px-6 py-2 text-center md:w-[250px] shadow-lg hover:bg-secondary hover:text-secondary-light cursor-pointer">
                Log in
              </a>
              <a className="text-lg font-medium text-primary-dark border-2  border-primary-dark  transition-colors rounded px-6 py-2 text-center md:w-[250px] shadow-lg hover:bg-secondary hover:text-secondary-light cursor-pointer">
                Register
              </a>
            </div>

            <p className="text-md md:text-lg text-secondary italic font-bold text-center">
              Your personal tool to track expenses and incomes seamlessly.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
