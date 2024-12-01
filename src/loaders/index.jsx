import { Skeleton } from "antd";
import SkeletonInput from "antd/es/skeleton/Input";

const LoaderApi = () =>{
    const Card_pruduct_loader = () =>{
      return Array.from({ length: 4 }).map((_, idx) => (
        <div key={idx}>
          <Skeleton.Image className="!w-full !h-[380px]" active={true} />
          <SkeletonInput className="!w-[80%] !mt-2 !h-5" />
          <SkeletonInput className="!w-[50%] !h-8 !mt-2"   />
        </div>
      ));
      
    }
    return { Card_pruduct_loader };
}
export default LoaderApi



