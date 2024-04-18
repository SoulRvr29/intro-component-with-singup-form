import Form from "./Form";

export default function Home() {
  return (
    <main className="grid grid-cols-2 max-[900px]:grid-cols-1 max-[900px]:max-w-xl items-center max-w-6xl gap-8 p-6">
      <div className="max-[900px]:text-center">
        <h1 className="text-5xl max-[900px]:text-2xl max-[900px]:mx-8 font-[700] mb-6 ">
          Learn to code by watching others
        </h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
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
        <Form />
      </div>
    </main>
  );
}
