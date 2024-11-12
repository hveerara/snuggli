import Image from "next/image";
import Subscribe from "../_components/Subscribe";

function VetsPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/img/maltese-dog.jpg"
        alt="Cute Cat"
        width={500}
        height={400}
        className="h-[310px] w-full object-cover bg-cover bg-center bg-no-repeat opacity-85 z-0"
        priority
      />

      <Subscribe />
    </div>
  );
}

export default VetsPage;
