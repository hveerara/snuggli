import { getCurrentYear } from "@/lib/util";

function Footer() {
  return (
    <footer className="mt-auto border-t-[1px] border-design sticky p-3">
      <div className="flex items-center justify-between xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row">
        <div className="flex items-center justify-center gap-10 sm:flex sm:justify-between sm:text-left">
          <p className="text-sm text-slate-600">
            <span className="block sm:inline">
              {getCurrentYear()} - all rights reserved
            </span>
          </p>
        </div>
        <div>
          <p className="flex items-center gap-10 mt-4 text-sm text-slate-600 sm:order-first sm:mt-0">
            &copy; snuggli
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
