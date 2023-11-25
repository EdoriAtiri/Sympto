import { useState } from "react";
import Header from "../components/Header";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    age: "",
    bloog_group: "",
    height: "",
    weight: "",
    genotype: "",
    medical_records: "",
  });

  const { age, bloog_group, height, weight, genotype, medical_records } =
    profileData;

  const onChange = (e) => {
    setProfileData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = () => {};
  return (
    <div>
      <Header />

      <main className="flex w-full flex-col items-center justify-center px-4 py-6">
        <h1 className="mb-6 text-2xl font-bold uppercase md:text-3xl md:font-extrabold">
          Profile
        </h1>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="gap-8 space-y-2 lg:flex lg:space-y-0">
            <div className="space-y-2">
              <div>
                <label className="font-medium">Age</label>
                <input
                  onChange={onChange}
                  type="number"
                  id="age"
                  name="age"
                  value={age}
                  required
                  className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="font-medium">Height</label>
                <input
                  onChange={onChange}
                  type="text"
                  id="height"
                  name="height"
                  value={height}
                  required
                  className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="font-medium">Weight</label>
                <input
                  onChange={onChange}
                  type="text"
                  id="weight"
                  name="weight"
                  value={weight}
                  required
                  className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="font-medium">Medical Record</label>
                <input
                  onChange={onChange}
                  type="text"
                  name="medical_records"
                  id="medical_records"
                  value={medical_records}
                  required
                  className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <label className="font-medium">Blood Group</label>
                <select
                  className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
                  name="bloog_group"
                  id="bloog_group"
                  value={bloog_group}
                  onChange={onChange}
                >
                  <option value="" disabled defaultValue hidden>
                    Select your blood group
                  </option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="O">O</option>
                  <option value="AB">AB</option>
                  <option value="">Don&apos;t Know</option>
                </select>
              </div>

              <div className="">
                <label className="font-medium">Genotype</label>
                <select
                  className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
                  name="genotype"
                  id="genotype"
                  value={genotype}
                  onChange={onChange}
                >
                  <option value="" disabled defaultValue hidden>
                    Select Genotype
                  </option>
                  <option value="AA">AA</option>
                  <option value="AC">AC</option>
                  <option value="AS">AS</option>
                  <option value="CC">CC</option>
                  <option value="SC">SC</option>
                  <option value="SS">SS</option>
                  <option value="">Don&apos;t Know</option>
                </select>
              </div>
            </div>
          </div>

          <div className="w-full lg:mt-4 lg:flex lg:justify-center">
            <button className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white duration-150 hover:bg-indigo-500 active:bg-indigo-600 lg:w-96">
              Save Profile
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Profile;
