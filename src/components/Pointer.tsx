import { twMerge } from "tailwind-merge";
import mousePointer from "@/assets/images/mouse-pointer.svg";
import Image from "next/image";

const Pointer = (props: { name: string; color?: "red" | "blue" }) => {
    const { name, color } = props;
    return (
        <div className="relative">
            <Image
                src={mousePointer}
                alt="Mouse Pointer"
                className="size-5"
                style={{ filter: "brightness(0) invert(1)" }}
            />
            <div className="absolute top-full left-full">
                <div
                    className={twMerge(
                        "inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none",
                        color === "red" && "bg-red-500"
                    )}
                >
                    {name}
                </div>
            </div>
        </div>
    );
};

export default Pointer;
