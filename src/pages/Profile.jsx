import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Header from "../components/Header";
import { createProfile, reset } from "../features/User/userSlice";
import Loading from "../components/Loading";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    age: "40",
    blood_group: "O",
    height: "1.5",
    weight: "55",
    genotype: "AS",
    medical_records: "ejknjen",
  });

  const { age, blood_group, height, weight, genotype, medical_records } =
    profileData;

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.user,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset());

    if (isError) {
      toast.error(message);
    }

    // Redirect when logged in
    if (isSuccess) {
      toast.success("success");
    }

    dispatch(reset());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, message, isSuccess, user]);

  const onChange = (e) => {
    // if (e.target.type === "file") {
    //   const file = e.target.files[0];
    //   if (file) {
    //     // Read the file content and convert it to base64
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //       setProfileData((prev) => ({
    //         ...prev,
    //         image: reader.result, // Set the base64 string to the image field
    //       }));
    //     };
    //     reader.readAsDataURL(file);
    //   }
    // }

    setProfileData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createProfile(profileData));

    console.log(profileData);
  };
  return (
    <div>
      {isLoading && <Loading />}

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
            </div>

            <div className="space-y-2">
              <div>
                <label className="font-medium">Blood Group</label>
                <select
                  className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
                  name="blood_group"
                  id="blood_group"
                  value={blood_group}
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

          <div className="w-full">
            <label className="font-medium">Medical Record</label>
            <textarea
              onChange={onChange}
              type="text"
              name="medical_records"
              id="medical_records"
              value={medical_records}
              required
              className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
              rows="4"
            ></textarea>
            <input />
          </div>

          {/* <div>
            <label className="font-medium">image</label>
            <input
              type="file"
              className=""
              id="image"
              onChange={onChange}
              max="1"
              accept=".jpg,.png,.jpeg"
            />
          </div> */}

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
