import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./api";
import { Post } from "./types";

const usePosts = () => {
  const { data } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      return (await axiosInstance.get("/posts")).data.slice(0, 5);
    }
  })

  return {
    data,
  }
};

export default usePosts;
