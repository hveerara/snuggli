import Link from "next/link";

function Header() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    // {
    //   id: 2,
    //   name: "Vets",
    //   path: "/vets",
    // },
  ];
  return (
    <div className="flex items-center justify-between p-4 shadow-sm shadow-design width: 100%">
      <div className="flex items-center gap-10">
        <Link href="/" className="flex flex-row items-left">
          <p className="font-bold pl-3 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            SNUGGLI
          </p>
        </Link>
        <div className="flex gap-8 flex-row items-center justify-center">
          {Menu.map((item, index) => (
            <Link href={item.path} key={index}>
              <div
                key={index}
                className="hover:text-design text-slate-800 cursor-pointer hover:scale-105 transition-all ease-in-out"
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
