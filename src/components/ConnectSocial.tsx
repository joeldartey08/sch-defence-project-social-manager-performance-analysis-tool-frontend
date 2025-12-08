import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { connectSocials } from "../services/auth";
import Button from "./ui/button";

interface Props {
  fn: string ;
  name: string;
}
const ConnectSocial = ({ fn, name }: Props) => {
  const [start, setStart] = useState<boolean>(false);

  const { isLoading, isError } = useQuery({
    queryKey: ["tikTok"],
    queryFn: () => connectSocials(fn),
    enabled: !!start,
  });

  return (
    <div className="flex cursor-pointer flex-col">
      <Button
        disabled={isLoading ? true : false}
        onClick={() => setStart(!start)}
        className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-opacity-80 transition flex items-center gap-2"
      >
        {isLoading ? "loading....." : "connect"}
      </Button>
      {isError && (
        <span className="text-red-600 text-[9px]">
          error connecting to {name};
        </span>
      )}
    </div>
  );
};

export default ConnectSocial;
