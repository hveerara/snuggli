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
        src="/img/cat-dog.jpg"
        alt="Cover Image"
        width={500}
        height={500}
        className="bg-img"
        priority
      />
      <div className="flex flex-col items-center justify-center pt-24">
        <h3 className="text-3xl font-medium lg:font-bold lg:text-6xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Smart Pet Care
        </h3>
        <h4 className="mt-10 text-xl font-medium lg:font-medium lg:text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          COMING SOON!
        </h4>
      </div>
    </div>
  );
}

export default Page;
