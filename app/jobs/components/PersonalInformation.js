import TextInput from "../../Components/Common/InputField";

const PersonalInformation = ({
  handleChange,
  values,
  errors,
  touched,
  handleBlur,
}) => {
  const dist = [
    "Astore",
    "Diamer",
    "Gilgit",
    "Ghizer",
    "Gupis-Yasin",
    "Ghanche",
    "Hunza",
    "Nagar",
    "Skardu",
    "Kharmang",
    "Roundu",
    "Shigar",
    "Skardu",
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">
        Personal Information/Bio Data
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextInput
          id="fullName"
          name="personalInformation.fullName"
          label="Full Name"
          placeholder="e.g. Muhammad Ali"
          value={values.personalInformation.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors?.fullName}
          touched={touched?.fullName}
        />
        <div>
          <TextInput
            id="fatherName"
            name="personalInformation.fatherName"
            label="Father Name"
            placeholder="e.g. Ali, Ahmed, etc."
            value={values.personalInformation.fatherName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors?.fatherName}
            touched={touched?.fatherName}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="domicile"
            className="block text-sm font-medium text-gray-700"
          >
            Domicile
          </label>
          <select
            id="domicile"
            name="personalInformation.domicile"
            value={values.personalInformation.domicile}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {dist.map((dist, index) => (
              <option key={index} value={dist}>
                {dist}
              </option>
            ))}
          </select>
        </div>

        <div>
          <TextInput
            id="cnic"
            type="tel"
            name="personalInformation.cnic"
            label="CNIC Number"
            placeholder="e.g. 12345-1234567-1"
            value={values.personalInformation.cnic}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors?.cnic}
            touched={touched?.cnic}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <TextInput
            id="email"
            type="email"
            name="personalInformation.email"
            label="Email"
            placeholder="e.g. example@gmail.com"
            value={values.personalInformation.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors?.email}
            touched={touched?.email}
          />
        </div>
        <div>
          <TextInput
            type="file"
            id="photo"
            label="Recent Photo"
            accept=".jpg, .png, .jpeg"
            name="personalInformation.photo"
            onChange={(e) => {
              const file = e.target.files?.[0];
              console.log("File:", file.size);
              if (file.size > 5206747) {
                alert("File size must be less than 5MB");
                e.target.value = null;
                return;
              }
              if (file && file.size < 5206747) {
                const reader = new FileReader();
                reader.onload = () => {
                  handleChange({
                    target: {
                      name: "personalInformation.photo",
                      value: reader.result,
                    },
                  });
                };
                reader.readAsDataURL(file);
              }
            }}
            error={errors?.photo}
            touched={touched?.photo}
            onBlur={handleBlur}
            // className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <TextInput
            type="file"
            id="photo"
            label="NOC (In case of Govt. Employee)"
            accept=".pdf, .jpg, .png"
            name="personalInformation.noc"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                  handleChange({
                    target: {
                      name: "personalInformation.noc",
                      value: reader.result,
                    },
                  });
                };
                reader.readAsDataURL(file);
              }
            }}
            error={errors?.noc}
            touched={touched?.noc}
            onBlur={handleBlur}
            // className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <TextInput
            type="file"
            id="photo"
            label="CV Of Candidate (PDF)"
            accept=".pdf"
            name="personalInformation.cv"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                  handleChange({
                    target: {
                      name: "personalInformation.cv",
                      value: reader.result,
                    },
                  });
                };
                reader.readAsDataURL(file);
              }
            }}
            error={errors?.cv}
            touched={touched?.cv}
            onBlur={handleBlur}
            // className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
