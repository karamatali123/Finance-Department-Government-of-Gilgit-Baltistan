const PersonalInformation = ({ handleChange, values }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-900">Personal Information</h3>

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
          <input
            type="text"
            id="domicile"
            name="personalInformation.domicile"
            value={values.personalInformation.domicile}
            onChange={handleChange}
            placeholder="eg: Gilgit, Skardu, etc."
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
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
            name="personalInformation.photo"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
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
      </div>
    </div>
  );
};

export default PersonalInformation;
