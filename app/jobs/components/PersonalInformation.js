const PersonalInformation = ({ handleChange, values }) => {
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
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="eg: Muhammad Ali"
            name="personalInformation.fullName"
            value={values.personalInformation.fullName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
        </div>
        <div>
          <label
            htmlFor="fatherName"
            className="block text-sm font-medium text-gray-700"
          >
            Father Name
          </label>
          <input
            type="text"
            id="fatherName"
            name="personalInformation.fatherName"
            value={values.personalInformation.fatherName}
            onChange={handleChange}
            placeholder="eg: Ali, Ahmed, etc."
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            required
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
            required
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
          <label
            htmlFor="cnic"
            className="block text-sm font-medium text-gray-700"
          >
            CNIC Number
          </label>
          <input
            type="tel"
            id="cnic"
            placeholder="eg: 12345-1234567-1"
            name="personalInformation.cnic"
            value={values.personalInformation.cnic}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="eg: example@gmail.com"
            name="personalInformation.email"
            value={values.personalInformation.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
        </div>
        <div>
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-700"
          >
            Recent Photo
          </label>
          <input
            type="file"
            id="photo"
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
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
        </div>
        <div>
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-700"
          >
            NOC (In case of Govt. Employee) (PDF, JPG, PNG)
          </label>
          <input
            type="file"
            id="photo"
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
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
        </div>
        <div>
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-700"
          >
            CV Of Candidate (PDF)
          </label>
          <input
            type="file"
            id="photo"
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
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
