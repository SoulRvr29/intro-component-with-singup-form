"use client";
import { FaCircleExclamation } from "react-icons/fa6";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(`
    Form submitted
    ------------------
    First Name: ${data.firstName} 
    Last Name: ${data.lastName} 
    Email: ${data.email} 
    Password: ${data.password} 
    `);
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
          className="flex flex-col gap-8 bg-white rounded-lg p-10 max-[900px]:p-6 shadow-[0_8px_0_rgba(0,0,0,0.2)]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative grid  items-center">
            <input
              className="w-full border rounded-md px-8 py-4 border-neutralGrayishBlue text-neutralDarkBlue placeholder:text-neutralDarkBlue placeholder:font-[500]"
              placeholder="First Name"
              type="text"
              id="firstName"
              {...register("firstName", { required: true, minLength: 3 })}
            />
            {errors.firstName && (
              <div className="absolute right-6 ">
                <FaCircleExclamation color="var(--primaryRed)" size={26} />
              </div>
            )}
            {errors.firstName?.type === "required" && (
              <p className="text-primaryRed text-xs text-right absolute right-0 -bottom-4">
                First Name cannot be empty
              </p>
            )}
            {errors.firstName?.type === "minLength" && (
              <p className="text-primaryRed text-xs text-right absolute right-0 -bottom-4">
                Minimum length is 3 characters
              </p>
            )}
          </div>
          <div className="relative grid items-center">
            <input
              className="w-full border rounded-md px-8 py-4 border-neutralGrayishBlue text-neutralDarkBlue placeholder:text-neutralDarkBlue placeholder:font-[500]"
              placeholder="Last Name"
              type="text"
              id="lastName"
              {...register("lastName", { required: true, minLength: 3 })}
            />
            {errors.lastName && (
              <div className="absolute right-6 ">
                <FaCircleExclamation color="var(--primaryRed)" size={26} />
              </div>
            )}
            {errors.lastName?.type === "required" && (
              <p className="text-primaryRed text-xs text-right absolute right-0 -bottom-4">
                Last Name cannot be empty
              </p>
            )}
            {errors.lastName?.type === "minLength" && (
              <p className="text-primaryRed text-xs text-right absolute right-0 -bottom-4">
                Minimum length is 3 characters
              </p>
            )}
          </div>
          <div className="relative grid items-center">
            <input
              className="w-full border rounded-md px-8 py-4 border-neutralGrayishBlue text-neutralDarkBlue placeholder:text-neutralDarkBlue placeholder:font-[500]"
              placeholder="Email Address"
              type="text"
              id="email"
              {...register("email", {
                required: true,
                pattern: /^[\w._]+@[\w]+\.[\w]{2,}$/i,
              })}
            />
            {errors.email && (
              <div className="absolute right-6 ">
                <FaCircleExclamation color="var(--primaryRed)" size={26} />
              </div>
            )}
            {errors.email && (
              <p className="text-primaryRed text-xs text-right absolute right-0 -bottom-4">
                Looks like this is not an email
              </p>
            )}
          </div>
          <div className="relative grid items-center">
            <input
              className="w-full border rounded-md px-8 py-4 border-neutralGrayishBlue text-neutralDarkBlue placeholder:text-neutralDarkBlue placeholder:font-[500]"
              placeholder="Password"
              type="password"
              id="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[\w])(?=.*\d).+$/,
              })}
            />
            {errors.password && (
              <div className="absolute right-6 ">
                <FaCircleExclamation color="var(--primaryRed)" size={26} />
              </div>
            )}
            {errors.password?.type === "required" && (
              <p className="text-primaryRed text-xs text-right absolute right-0 -bottom-4">
                First Name cannot be empty
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-primaryRed text-xs text-right absolute right-0 -bottom-4">
                Minimum length is 6 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-primaryRed text-xs text-right absolute right-0 -bottom-4">
                Must be letters and numbers
              </p>
            )}
          </div>
          <button
            type="submit"
            className="text-center uppercase bg-primaryGreen rounded-md py-4 pb-3 font-[500] border-[rgb(37,170,113)] -mb-6 border-b-4 hover:opacity-75"
          >
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
