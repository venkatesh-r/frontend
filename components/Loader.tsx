import Image from "next/image";

const Loader = () => {
  return (
    <>
      <p className="flex text-center justify-center mt-50">
        <Image
          src="/loader.gif"
          width={80}
          height={80}
          alt="Picture of the author"
        />
      </p>
    </>
  );
};

export default Loader;
