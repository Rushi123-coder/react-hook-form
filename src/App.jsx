import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted! Check console.");
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">User Registration</h2>

        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block font-medium">Full Name</label>
          <input
            id="fullName"
            type="text"
            {...register("fullName", { required: "Name is required" })}
            className="w-full border rounded-lg p-2 mt-1"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-medium">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
            className="w-full border rounded-lg p-2 mt-1"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block font-medium">Password</label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password required",
              minLength: { value: 6, message: "Min 6 characters" },
            })}
            className="w-full border rounded-lg p-2 mt-1"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {/* Age */}
        <div>
          <label htmlFor="age" className="block font-medium">Age</label>
          <input
            id="age"
            type="number"
            {...register("age", {
              required: "Age required",
              min: { value: 18, message: "Must be at least 18" },
            })}
            className="w-full border rounded-lg p-2 mt-1"
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
        </div>

        {/* Gender (Radio) */}
        <div>
          <label className="block font-medium">Gender</label>
          <div className="flex gap-4 mt-1">
            <label >
              <input id="male" type="radio" value="male" {...register("gender", { required: true })} /> Male
            </label>
            <label>
              <input id="female" type="radio" value="female" {...register("gender", { required: true })} /> Female
            </label>
          </div>
          {errors.gender && <p className="text-red-500 text-sm">Gender is required</p>}
        </div>

        {/* Country (Select) */}
        <div>
          <label htmlFor="country" className="block font-medium">Country</label>
          <select id="country" autoComplete="country"
            {...register("country", { required: "Select your country" })}
            className="w-full border rounded-lg p-2 mt-1"
          >
            <option value="">-- Select --</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </select>
          {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
        </div>

        {/* Date of Birth */}
        <div>
          <label htmlFor="dateOfBirth" className="block font-medium">Date of Birth</label>
          <input
            id="dateOfBirth"
            type="date"
            {...register("dob", { required: "Date of Birth required" })}
            className="w-full border rounded-lg p-2 mt-1"
          />
          {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block font-medium">Phone</label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register("phone", {
              required: "Phone required",
              pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number" },
            })}
            className="w-full border rounded-lg p-2 mt-1"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        {/* Address (Textarea) */}
        <div>
          <label htmlFor="address" className="block font-medium">Address</label>
          <textarea
            id="address"
            autoComplete="street-address"
            {...register("address", { required: "Address required" })}
            className="w-full border rounded-lg p-2 mt-1"
          ></textarea>
          {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-center gap-2">
          <input id="terms" type="checkbox" {...register("terms", { required: true })} />
          <span>I accept the terms and conditions</span>
        </div>
        {errors.terms && <p className="text-red-500 text-sm">You must accept the terms</p>}

        {/* Submit */}
        <button
          id="submit"
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
