import Image from "next/image";
import Subscribe from "../_components/Subscribe";

function VetsPage() {
  return (
    <div
      style={{ width: "100%", height: "100%", position: "relative" }}
      className="flex flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row min-h-screen"
    >
      <Image
        src="/img/maltese-dog.jpg"
        alt="Cute Cat"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "auto" }}
        className="object-cover bg-center bg-no-repeat opacity-85 z-0 w-full 2xl:w-1/2"
        priority={true}
      />

      <Subscribe />
    </div>
  );
}

export default VetsPage;
