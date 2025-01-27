import Image from "next/image";

function Page() {
  return (
    <div
      className="flex flex-col flex-grow"
      style={{
        position: "relative",
      }}
    >
      <Image
        src="/img/dogs-bg.png"
        alt="Cover Image"
        width={500}
        height={500}
        className="bg-img"
        priority={true}
      />
      <div className="flex flex-col items-center justify-center pt-24">
        <h3 className="text-3xl font-bold lg:font-bold lg:text-6xl text-center text-slate-100">
          Smart Pet Care
        </h3>
        <h4 className="mt-10 text-xl font-medium lg:font-medium lg:text-3xl text-center text-slate-100">
          COMING SOON!
        </h4>
      </div>
    </div>
  );
}

export default Page;
