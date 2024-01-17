import Image from "next/image";
import rafusoft from "../public/img/rafusoft-logo.svg"

export default function loading(){
  return(
    <div className="h-[100vh w-full] flex justify-center items-center">
        <Image src={rafusoft} alt="rafusoft-logo"></Image>
    </div>
  )
}