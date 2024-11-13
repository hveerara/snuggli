import Image from "next/image";
import Subscribe from "../_components/Subscribe";

function VetsPage() {
  return (
    <div className="flex flex-row h-screen">
      <Image
        src="/img/maltese-dog.jpg"
        alt="Cute Cat"
        width={500}
        height={700}
        className="w-50% object-cover bg-center bg-no-repeat opacity-85 z-0"
        priority
      />

      <Subscribe />
    </div>
  );
}

export default VetsPage;
