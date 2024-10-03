import Image from "next/image";

const MemberCard = ({ member }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <Image
        src={member.image}
        alt={member.name}
        height={74}
        width={74}
        className="rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-semibold">{member.name}</h3>
      <p className="text-gray-600">{member.position}</p>
    </div>
  );
};

export default MemberCard;
