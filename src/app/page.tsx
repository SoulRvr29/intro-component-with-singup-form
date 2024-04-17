"use client";

export default function Home() {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted");
  };
  return (
    <main className="grid grid-cols-2 max-[900px]:grid-cols-1 max-[900px]:max-w-xl items-center max-w-6xl gap-8 p-6">
      <div className="max-[900px]:text-center">
        <h1 className="text-5xl max-[900px]:text-2xl max-[900px]:mx-8 font-[700] mb-6 ">
          Learn to code by watching others
        </h1>
        <p>
          See how experienced develipers solve problems in real-time. Wathing
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="flex flex-col gap-8 ">
        <div>
          <div className="text-center bg-accentBlue rounded-lg p-4 shadow-[0_8px_0_rgba(0,0,0,0.2)]">
            <span className="font-[600]">Try it free 7 days</span> then $20/mo.
            thereafter
          </div>
        </div>
        <form
          className="flex flex-col gap-4 bg-white rounded-lg p-10 max-[900px]:p-6 shadow-[0_8px_0_rgba(0,0,0,0.2)]"
          onSubmit={(e) => submitHandler(e)}
        >
          <input
            className="border rounded-md px-8 py-4 border-neutralGrayishBlue text-neutralDarkBlue placeholder:text-neutralDarkBlue placeholder:font-[500]"
            placeholder="First Name"
            type="text"
            name="firstName"
            id="firstName"
          />
          <input
            className="border rounded-md px-8 py-4 border-neutralGrayishBlue text-neutralDarkBlue placeholder:text-neutralDarkBlue placeholder:font-[500]"
            placeholder="Last Name"
            type="text"
            name="lastName"
            id="lastName"
          />
          <input
            className="border rounded-md px-8 py-4 border-neutralGrayishBlue text-neutralDarkBlue placeholder:text-neutralDarkBlue placeholder:font-[500]"
            placeholder="Email Address"
            type="text"
            name="email"
            id="email"
          />
          <input
            className="border rounded-md px-8 py-4 border-neutralGrayishBlue text-neutralDarkBlue placeholder:text-neutralDarkBlue placeholder:font-[500]"
            placeholder="Password"
            type="text"
            name="password"
            id="password"
          />
          <button className="text-center uppercase bg-primaryGreen rounded-md py-4 pb-3 font-[500] border-[rgb(37,170,113)]  border-b-4 hover:opacity-75">
            claim your free trial
          </button>
          <p className="text-neutralGrayishBlue text-center text-xs scale-[0.8] leading-6">
            By clicking the button, you are agreeing to our{" "}
            <span className="text-primaryRed font-[600]">
              Terms and Services
            </span>
          </p>
        </form>
      </div>
    </main>
  );
}
