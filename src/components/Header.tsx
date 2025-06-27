import ResCard from "./ResCard";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <>
      <div className="flex flex-col space-y-8">
        <div className="mt-8 sm:mt-12">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center px-4 sm:px-6">
            <Input
              className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white border-gray-300 focus:border-primary focus:ring-primary placeholder:text-sm text-gray-100"
              placeholder="Search for restaurants, cuisines, or dishes..."
            />
            <Button
              variant="outline"
              className="w-full sm:w-auto px-8 py-2 border-gray-300 hover:bg-primary hover:text-white transition-colors"
            >
              Search
            </Button>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-8">
            <ResCard resName="Meghana Foods" cuisine="Indian" eta="25 min" />
            <ResCard resName="KFC" cuisine="Italian" eta="25 min" />
            <ResCard resName="Tandoori Fusion" cuisine="Italian" eta="25 min" />
            <ResCard resName="Meghana Foods" cuisine="Italian" eta="25 min" />
            <ResCard resName="Meghana Foods" cuisine="Italian" eta="25 min" />
            <ResCard resName="Meghana Foods" cuisine="Italian" eta="25 min" />
            <ResCard resName="Meghana Foods" cuisine="Italian" eta="25 min" />
            <ResCard resName="Meghana Foods" cuisine="Italian" eta="25 min" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
