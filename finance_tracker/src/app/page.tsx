import DefaultButton from "./components/Buttons/defaultButton";

export default function Home() {
  return (
    <div className="bg-background-light min-h-screen">
      <main className="flex flex-col md:flex-row min-h-screen font-roboto">
        {/* Right Side */}
        <section className="right-side w-full md:w-1/2 min-h-[50vh] md:min-h-screen bg-sea-green flex items-center justify-center">
          <div className="flex flex-col items-center gap-6 p-8 md:p-10 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-dark text-center">
              Welcome to the Finance Tracker
              <p className="text-base md:text-lg text-primary-light font-normal backdrop:text-center">
                Your personal tool to track expenses and incomes seamlessly.
              </p>
            </h1>

            <div className="flex flex-col gap-4 w-full md:w-auto bg-secondary-light">
              <DefaultButton text="Login" />

              <DefaultButton text="Register" />

              <DefaultButton text="Dashboard" />
            </div>
          </div>
        </section>
        {/* Left Side */}
        <section className="left-side w-full md:w-1/2 min-h-[50vh] md:min-h-screen bg-primary-dark flex items-center justify-center">
          <div className="text-baby-powder text-2xl md:text-3xl font-bold text-center p-6 md:p-0 uppercase tracking-wide">
            Your Financial Overview
          </div>
        </section>
      </main>
    </div>
  );
}
